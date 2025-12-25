const TOKEN = "8254708263:AAG44ieJsBA-R1QzYMmvVg_2ytPFsn8bBvA";
const CHAT_ID = "569301626";

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = this.querySelector('input[placeholder="Имя"]').value;
  const phone = this.querySelector('input[placeholder="Телефон"]').value;
  const message = this.querySelector('textarea').value;

  const text =
    `📩 Новая заявка\n\n` +
    `👤 Имя: ${name}\n` +
    `📞 Телефон: ${phone}\n` +
    `💬 Комментарий: ${message || "-"}`;

  fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: text
    })
  })
  .then(() => {
    alert("Заявка отправлена!");
    this.reset();
  })
  .catch(() => {
    alert("Ошибка отправки");
  });
});