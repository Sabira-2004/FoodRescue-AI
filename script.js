function rescueFood() {

    const input = document.getElementById("ingredients").value;

    const result = document.getElementById("result");

    if (input.trim() === "") {
        result.innerHTML = `
            <h3>⚠️ Please enter some ingredients!</h3>
            <p>Example: Rice, Egg, Tomato, Onion</p>
        `;
        return;
    }

    const ingredients = input.toLowerCase();

    let suggestions = [];
    let priority = "";

    /* AI-like Recipe Suggestions */

    if (ingredients.includes("rice")) {
        suggestions.push("🍚 Delicious Fried Rice");
        suggestions.push("🍲 Vegetable Rice Bowl");
    }

    if (ingredients.includes("egg")) {
        suggestions.push("🍳 Egg Omelette");
    }

    if (ingredients.includes("tomato")) {
        suggestions.push("🍅 Tomato Curry or Tomato Rice");
        priority = "⚠️ Use tomatoes soon to avoid spoilage.";
    }

    if (ingredients.includes("potato")) {
        suggestions.push("🥔 Potato Fry or Potato Curry");
    }

    if (ingredients.includes("onion")) {
        suggestions.push("🧅 Onion-based Curry");
    }

    if (suggestions.length === 0) {
        suggestions.push("🍲 Try creating a mixed vegetable dish!");
        suggestions.push("🥗 Create a healthy kitchen leftover salad!");
    }

    result.innerHTML = `
        <h3>🤖 FoodRescue AI Suggestions</h3>

        <p><strong>Ingredients detected:</strong> ${input}</p>

        <br>

        <p><strong>🍽️ Rescue Ideas:</strong></p>

        <ul style="text-align:left; margin:15px auto; max-width:400px;">
            ${suggestions.map(item => `<li>${item}</li>`).join("")}
        </ul>

        <p style="margin-top:15px;">
            ${priority || "✅ Your ingredients can be creatively used to reduce food waste!"}
        </p>

        <p style="margin-top:15px;">
            🌱 <strong>Food Waste Tip:</strong> Store leftover food properly and use older ingredients first.
        </p>
    `;
}