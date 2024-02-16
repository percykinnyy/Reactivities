
using AutoMapper;
using Domain;
using MediatR;
using Microsoft.Extensions.Logging;
using Persistence;

namespace Application.Activities
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
            public Activity Activity {get; set;}

        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private IMapper _mapper;
            private readonly ILogger<Edit> _logger;

            public Handler(DataContext context, IMapper mapper, ILogger<Edit> logger)
            {
                _logger = logger;
                _mapper = mapper;
                _context = context;
            }

             public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await _context.Activities.FindAsync(request.Id);
                _mapper.Map(request.Activity, activity);
                _logger.LogInformation(request.Activity.Category + " -- "  + request.Activity.Title);
                _logger.LogInformation(activity.Category + " -- "  + activity.Title);
                await  _context.SaveChangesAsync();
                //activity.Title =  request.Activity.Title ?? activity.Title; 
            }
        }
    }
}