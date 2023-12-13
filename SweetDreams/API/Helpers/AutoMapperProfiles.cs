using API.DTOs;
using API.Entities;
using AutoMapper;

namespace API.Helpers;

public class AutoMapperProfiles : Profile
{
    public AutoMapperProfiles()
    {
        CreateMap<AppUser, UserDto>();
        CreateMap<RegisterDto, AppUser>()
            .ForMember(dest => dest.Email,
                opt => opt
                    .MapFrom(src => src.Email.ToLower()));
        CreateMap<Product, ProductDto>();
        CreateMap<CreateProductDto, Product>();
        CreateMap<UpdateProductDto, Product>();
    }
}