// رسالة تأكيد عند إرسال النموذج
document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("تم إرسال بياناتك بنجاح!");
  });
});

// تأثير بسيط عند تمرير الماوس فوق المنتج
document.querySelectorAll(".product").forEach(product => {
  product.addEventListener("mouseover", function() {
    product.style.boxShadow = "0 0 15px rgba(0, 0, 0, 0.3)";
    product.style.transform = "scale(1.05)";
    product.style.transition = "all 0.3s ease";
  });
  product.addEventListener("mouseout", function() {
    product.style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.1)";
    product.style.transform = "scale(1)";
  });
});