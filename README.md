
````markdown
# 🍽️ Pinoy Ulam API

![Pinoy Ulam API Logo](./pinoyDishes.png)

> **Pinoy Ulam API** helps indecisive foodies decide what to eat today by serving random Filipino dish (ulam) suggestions. Whether you’re craving adobo, sinigang, or something new, this API provides quick, randomized recommendations to inspire your next meal.

---

## 📌 Features

- Returns a **random Filipino ulam** (main dish)
- Filter dishes by **type** (chicken, pork, beef, seafood, vegetables, etc.)
- Lightweight and fast — perfect for use in daily suggestion apps or bots
- Ideal for meal planning or *"Anong ulam natin today?"* solutions

---

## 📁 API Endpoints

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
````

---

### 🔹 `GET /api/entries/food/type`

Returns a list of Filipino dishes filtered by their **type**.

#### 🧾 Query Parameters:

| Parameter | Type   | Description               |
| --------- | ------ | ------------------------- |
| `value`   | string | Type of ulam to filter by |

#### ✅ Available Types:

* `pork`
* `vegetable`
* `beef`
* `chicken`

#### 📥 Example Request:

```
GET /api/entries/food/type?value=vegetable
```

#### 📤 Sample Response:

```json
[
  {
    "id": 9,
    "name": "laing",
    "image-path": "image/laing",
    "type": "vegetable"
  },
  {
    "id": 10,
    "name": "pakbet",
    "image-path": "image/pakbet",
    "type": "vegetable"
  },
  {
    "id": 16,
    "name": "ginisang monggo",
    "image-path": "image/ginisang_monggo",
    "type": "vegetable"
  },
  {
    "id": 17,
    "name": "tortang talong",
    "image-path": "image/tortang_talong",
    "type": "vegetable"
  },
  {
    "id": 30,
    "name": "lumpiang sariwa",
    "image-path": "image/lumpiang_sariwa",
    "type": "vegetable"
  },
  {
    "id": 32,
    "name": "ginataang kalabasa",
    "image-path": "image/ginataang_kalabasa",
    "type": "vegetable"
  },
  {
    "id": 40,
    "name": "ginisang ampalaya",
    "image-path": "image/ginisang_ampalaya",
    "type": "vegetable"
  },
  {
    "id": 41,
    "name": "chopseuy",
    "image-path": "image/chopseuy",
    "type": "vegetable"
  },
  {
    "id": 42,
    "name": "ensaladang talong",
    "image-path": "image/ensaladang_talong",
    "type": "vegetable"
  }
]
```



## 📣 Tagline

> "Ulam ideas, the Filipino way."

---

## 📄 License

MIT

---

## 🧑‍🍳 Author

Created with 🇵🇭 love by Jep.
Feedback and PRs welcome!

```

---

Let me know if you want this auto-exported to a `.md` file or if you want a Postman collection too!
```

