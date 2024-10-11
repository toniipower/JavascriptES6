function deleteCookie(name) {
    console.log(name);
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;SameSite=Strict;Secure`;
}