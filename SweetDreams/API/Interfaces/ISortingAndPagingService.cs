namespace API.Interfaces;

public interface ISortingAndPagingService<T>
{
    IQueryable<T> ApplySorting(IQueryable<T> source, string sortOrder);
    (IEnumerable<T>, int) ApplyPaging(IEnumerable<T> source, int pageNumber, int pageSize);
}