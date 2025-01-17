function passwordChecker(password) {
    // Check minimum length (8 characters)
    if (password.length < 8) {
        return false;
    }

    // Check for at least one special character
    const specialChars = /[!@#$%^&*(),.?":{}|<>]/;
    if (!specialChars.test(password)) {
        return false;
    }

    // Check for at least one number
    const hasNumber = /\d/;
    if (!hasNumber.test(password)) {
        return false;
    }

    // Check for IPL in any case
    const containsIPL = /ipl/i;
    if (containsIPL.test(password)) {
        return false;
    }

    // If all checks pass, return true
    return true;
}

module.exports = passwordChecker;
