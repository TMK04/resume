export function formatNonEmptyStr(
  str: string | null | undefined,
  formatStr = (str: string) => str
) {
  return str ? formatStr(str) : "";
}
export function formatNonEmptyClassName(className: string | undefined) {
  return formatNonEmptyStr(className, (className) => ` ${className}`);
}
