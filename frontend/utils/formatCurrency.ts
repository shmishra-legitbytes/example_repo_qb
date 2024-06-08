export function formatCurrency(locale: string, currency: string) {
    const formatter = new Intl.NumberFormat(locale, {
        currency,
        style: "currency",
        minimumFractionDigits: 2
    })
    return function (amount: number) {
        return formatter.format(amount);
    }
}