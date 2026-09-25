using Futbolio.API.Entities.Common;

namespace Futbolio.API.Entities
{
    public class Team : BaseEntity
    {
        public string Name { get; set; } = string.Empty;

        public string LogoUrl { get; set; } = string.Empty;

        public string City { get; set; } = string.Empty;

        public string Stadium { get; set; } = string.Empty;


        // Navigation Properties

        public IList<Match> HomeMatches { get; set; }

        public IList<Match> AwayMatches { get; set; }

        public IList<Match_Goal> Goals { get; set; }

        public IList<Match_Card> Cards { get; set; }

        public IList<Substitution> Substitutions { get; set; }
    }
}