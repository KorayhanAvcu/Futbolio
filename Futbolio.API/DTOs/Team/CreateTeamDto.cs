namespace Futbolio.API.DTOs.Team
{
    public class CreateTeamDto
    {
        public string Name { get; set; }

        public string LogoUrl { get; set; }

        public string City { get; set; }

        public string Stadium { get; set; }
    }
}