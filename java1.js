        function placeOrder() {
            const choice = document.getElementById("choice").value;
            alert("You have ordered: " + choice);
            localStorage.setItem("lastOrder", choice);
            window.location.href = "order.html";
        }