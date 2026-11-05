// Alberta Roughriders — real cowboy logo
(function () {
  const LOGO = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAABBL0lEQVR42u19d3hVVdb+u/cpt+Wm94QSUigJPVQRiEgV1FGJYncERecT69i+UWCcGeuMBcQ6OlhQg4ooqCiQ0AOkk0AK6fWm3t7OOXv//rgJIoOj4vj7Gut5Ljw3t529117tXe/eBzgv5+W8nJfzcl7OTci5fpBzTgBQ5OWRzV1dfGlFBQcArFmD7/2fnk4QFRX4ndmzNQAghPDzU/9vkpycHIHncOGXfAfPzRV5To7Qr9Tzci4Wwjmn/aubAYC9qDpKZxaz4HJRl9cTYYiOnu6xOrzgoOCM640GonDN6W9p2yKHhCUSs1Gi3ZYvTSnjFZIQ3P297928mWDpUnbecgDxp1oFIUQDAOuBgvmU0sl+xZMgO0U/MRuHqK0tXzjdvjJjfOxC1a8wQgWiaCrTurs/Jnp5jBgctERxusphDr3M1nLS2ltQ0m3QyV9rxFBGCOk4TTkCgP/TiiE/xTIIIcxdXjmDgtzk8yvBTFG79ZIuzuOwHglLGRxp77E2eVpaj+hCgo1gnIEQAoVzYqR6OTzqMsVmtyter8scETGZKdoJVVP9VBBEY2iYQ1N8btXlrXdI7HDUyJFtZ7PG8wo5QxnWYzXzmdv7Z0ESd+r1xkyfz/ON2WT4hA4fWss5/6kuT+8uqY7gBrJA9qh6mHST3XYn0RtNNQQ8Hno9525vrc/v/zxkQnrNgGUuXbqU/19SzI8qxNrQEMw6nP9gHv8hSEKyfkjsOvPg2GOnZVoCAL558+Z/+vxSAIEMazZIFlHP+G7ZWVJ+AfP556mqGhMcEtqpSqJBknUtHDwGbteXUsaI3f/XLIb8q7SWEMLbc4uHSiHG54mmtoVnmh8gZLCHcy4C0H6urz+VKm/eDJKdrQ383drUFC52267w+XxjTMHmcCbLPdzpMnrsdkUnG3LM08bnAQDPyRH+twf/Hw3q3OXm3CTbeZ/9ECHpHp6bK65Zs4atXbv2Z09K/0Rq38uw8kDJYNIL4E0AcB2rnOTt7l1skiSTMTLKK5j0S32V9Vd6vK7tZFzG1wOKOV2h/ycUQgjhPCdHwCXTLdZDJYQHG27o2nfESC6c/PpARrRmzRq+du3ac3Yj/S6Icc5JXl6ekJeXx0yjRxwFcNS2/8hwnSBcpXi8I4gsHoHC5vftPTIdwcFvk3Ej6vutjfxvc2P/OoasXk3J2rWse+feUYwIv6c6nSwEB1G9wfiYIXXwyYEiD11dHL8w+J5yZwBBRQUlGRl+AOjatX+4YNDdRyl1ECK0cWhjmV/dHX7hlI3/G63lJ6e93TvzR0lhpnWyIBo1cJESstVg1r1Lhg1rPPXenBwBUVFkTV4eW7NmDf8hmOQ72AXkzGD/Q9J3qPAKzrQlRKDHGSehYJrZHB6";
  function apply() {
    document.querySelectorAll("img.team-logo, img[alt*=\"Roughriders\"]").forEach(function (img) {
      if (!img.src || img.src.indexOf("data:image") === -1) {
        img.src = LOGO;
      }
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", apply);
  else apply();
})();
