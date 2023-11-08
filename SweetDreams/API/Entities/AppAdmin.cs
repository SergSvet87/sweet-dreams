﻿namespace API.Entities;

public class AppAdmin : IAppUser
{
    public int Id { get; set; }

    public string Email { get; set; }

    public byte[] PasswordHash { get; set; }

    public byte[] PasswordSalt { get; set; }
}