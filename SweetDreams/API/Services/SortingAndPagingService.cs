using API.Interfaces;

namespace API.Services;

public class SortingAndPagingService<T> : ISortingAndPagingService<T>
{
    public IQueryable<T> ApplySorting(IQueryable<T> source, string sortOrder)
    {
        if (string.IsNullOrWhiteSpace(sortOrder))
        {
            return source;
        }

        switch (sortOrder.ToLower())
        {
            case "name":
                return source
                    .OrderBy(item => item.GetType().GetProperty("Name").GetValue(item, null));
            case "name_desc":
                return source
                    .OrderByDescending(item => item.GetType().GetProperty("Name").GetValue(item, null));
            case "price":
                return source
                    .OrderBy(item => item.GetType().GetProperty("Price").GetValue(item, null));
            case "price_desc":
                return source
                    .OrderByDescending(item => item.GetType().GetProperty("Price").GetValue(item, null));
            case "rating":
                return source
                    .OrderBy(item => item.GetType().GetProperty("Price").GetValue(item, null));
            case "rating_desc":
                return source
                    .OrderByDescending(item => item.GetType().GetProperty("Price").GetValue(item, null));
            default:
                return source;
        }
    }

    public (IEnumerable<T>, int) ApplyPaging(IEnumerable<T> source, int pageNumber, int pageSize)
    {
        int totalItems = source.Count();
        var paginatedItems = source.Skip((pageNumber - 1) * pageSize).Take(pageSize);

        return (paginatedItems, totalItems);
    }
}