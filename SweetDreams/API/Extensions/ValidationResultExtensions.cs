using FluentValidation.Results;

namespace API.Extensions;

public static class ValidationResultExtensions
{
    public static List<string> GetErrorMessages(this ValidationResult validationResult)
    {
        var errorMessages = new List<string>();

        foreach (var error in validationResult.Errors)
        {
            errorMessages.Add(error.ErrorMessage);
        }

        return errorMessages;
    }
}