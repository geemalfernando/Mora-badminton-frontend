export function getPaymentSlipHref(paymentSlip) {
  if (!paymentSlip) return null;
  if (paymentSlip === "N/A") return null;

  const value = String(paymentSlip);
  if (value.startsWith("data:")) return value;
  if (value.startsWith("http://") || value.startsWith("https://")) return value;

  return null;
}

