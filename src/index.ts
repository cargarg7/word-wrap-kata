export function fibonacci(payload: number): number {
    if (payload === 0) return 0;
    if (payload === 1) return 1;

    return fibonacci(payload - 1) + fibonacci(payload - 2);
}
