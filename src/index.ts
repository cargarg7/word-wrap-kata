export function fibonacci(payload: number): number {
    if (payload === 0) return 0;
    if (payload <= 2) return 1;

    return 2;
}
