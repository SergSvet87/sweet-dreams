namespace API;

public interface IAppUser // TODO: Decide is this interface required.
{
    public string Email { get; set; }

    public byte[] PasswordHash { get; set; }

    public byte[] PasswordSalt { get; set; }
}