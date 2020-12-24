function gcd(n1, n2) {
    let i = n1;
    while (i > 1) {
        if (n1 % i == 0 && n2 % i == 0) {
            return i;
        } else {
            i--;
        }
    }
    return i;
}