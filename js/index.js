
function message_send() {
    const message = document.getElementById("message");
    const message_value = message.value;
    const name = document.getElementById("name");
    const name_value = name.value;
    console.log(name_value);
    console.log(message_value);
    console.log(`${name_value}| ${message_value}`)

    fetch("https://discord.com/api/webhooks/1232461159999995964/0SWbhzcYfjMawl5kYl-6IDQiIDTqjDyH7kPwYoWdfcBuzeNwlT7WGQOtvMpzptQB6HnW", {
        
        method: "POST",
        body: JSON.stringify({
          content:
            `${name_value} ${message_value}`
          
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
    });
}
    