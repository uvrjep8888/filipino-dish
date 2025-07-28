# 🍽️ Pinoy Ulam API

![Pinoy Ulam API Logo](./pinoyDish.png)

> **Pinoy Ulam API** helps indecisive foodies decide what to eat today by serving random Filipino dish (ulam) suggestions. Whether you’re craving adobo, sinigang, or something new, this API provides quick, randomized recommendations to inspire your next meal.

---

## 📌 Features

- Returns a **random Filipino ulam** (main dish)
- Filter dishes by **type** (chicken, pork, beef, seafood, vegetables, etc.)
- Lightweight and fast — perfect for use in daily suggestion apps or bots
- Ideal for meal planning or *"Anong ulam natin today?"* solutions

---

## 📁 Endpoints

### 🔹 `GET /api/entries/food`
Returns a random ulam.

#### ✅ Example Response:
```json
{
  "id": 4,
  "name": "Sinigang na Baboy",
  "type": "Pork",
  "region": "Luzon",
  "description": "A sour soup made with pork and tamarind, often served with vegetables like kangkong and sitaw.",
  "image_url": "https://yourcdn.com/images/sinigang.jpg"
}
