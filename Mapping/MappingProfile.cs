using System.Linq;
using AutoMapper;
using Vega.Models;
using Vega.Resources;

namespace Vega.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            // Domain Resource to Api
            CreateMap<Make, MakeResource>();
            CreateMap<Model, ModelResource>();
            CreateMap<Feature, FeatureResource>();

            // Api Resource to Domain 
            CreateMap<VehicleResource, Vehicle>()
                    .ForMember(p => p.ContactName, opt => opt.MapFrom(vr => vr.Contact.Name))
                    .ForMember(p => p.ContactPhone, opt => opt.MapFrom(vr => vr.Contact.Phone))
                    .ForMember(p => p.ContactEmail, opt => opt.MapFrom(vr => vr.Contact.Email))
                    .ForMember(p => p.VehicleFeatures, opt => opt.MapFrom(vr => vr.VehicleFeatures.Select(id => new VehicleFeature { FeatureId = id })));
        }
    }
}