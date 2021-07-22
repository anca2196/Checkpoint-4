# Checkpoint-4

# The Wisdom of Kanye West

<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
      <ul>
        <li><a href="#frontend">frontend</a></li>
        <li><a href="#backend">backend</a></li>
      </ul>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#color-reference">Color Reference</a> </li>
    <li><a href="#tech-stack">Tech Stack</a> </li>
    <li><a href="#api">API</a> </li>
  </ol>
</details>

## About The Project

A showcase of Kane West's most amazing thoughts.

### Frontend
* This folder contains the react-app. 

<p align="center">
<img width="800" alt="React_App_and_checkpoint-4_—_anca_MacBook-Pro_—____checkpoint-4_—_-zsh_—_80×24" src="https://user-images.githubusercontent.com/62710917/126557109-64ef492c-37d5-43e9-8123-ff495f8a9e31.png">
<img width="800" alt="React_App" src="https://user-images.githubusercontent.com/62710917/126561294-aff7be86-9f45-4b84-8e92-f1583318c7d7.png">
<img width="800" alt="React_App" src="https://user-images.githubusercontent.com/62710917/126577700-b7d50e99-ebd9-4767-b40c-cf469378677f.png">
</p>

### Log In:

* Username: kanye
* Password: kanye

### Media responsive:

<img width="333" alt="React_App" src="https://user-images.githubusercontent.com/62710917/126558041-108f969d-cd25-40bd-81c6-81eaedde3b8c.png">
<img width="337" alt="React_App" src="https://user-images.githubusercontent.com/62710917/126557962-1f4ddb13-2719-4443-a647-c0cc131f4706.png">


### Backend

* This folder contains the node.js app.

<p align="center">
<img width="460" alt="__Checkpoint_4___DbDesigner_net" src="https://user-images.githubusercontent.com/62710917/126556689-5391807c-718b-4fe0-98a3-0c8e090fbf87.png">
</p>

* API :
 URL: `http://localhost:5000/diary/`
 
 ```http
  GET /diary/
```
 ```http
  POST /diary/
```
 ```http
  PUT /diary/:id
```
 ```http
  DELETE /diary/:id
```
Example response:

```JSON

[
    {
        "testimony_id": 1,
        "kanye_quote": "For me to say I wasn’t a genius, I would just be lying to you and to myself.",
        "fan_testimony": "This quote is exactly how I feel. Kanye gets me",
        "rating": 5
    },
    {
        "testimony_id": 2,
        "kanye_quote": "50 is Eminem’s favourite rapper. I’m my favourite rapper.",
        "fan_testimony": "Can you even hold it against him? I'd be my favourite rapper too if I were Kanye.",
        "rating": 4
    },
    {
        "testimony_id": 3,
        "kanye_quote": "One of my biggest Achilles heels has been my ego. And if I, Kanye West, can remove my ego, I think there’s hope for everyone.",
        "fan_testimony": "This man is so inspirational... I feel awakened",
        "rating": 5
    }
    ]

```


## Getting Started

1. Clone the project

```bash
  git clone git@github.com:anca2196/Checkpoint-4.git
```

2. Go to the project directory

```bash
  cd checkpoint-4
```

3. To start the frontend folder server:

```bash
  cd frontend
  npm install
  npm start
```

4. To start the backend folder server:

```bash
  cd backend
  npm install
  npm run dev
```

5. Happy coding!

## Color Reference


| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Black| ![#000000](https://via.placeholder.com/10/000000?text=+) #000000 |
| Falu Red| ![#941212](https://via.placeholder.com/10/941212?text=+) #941212 |
| White | ![#FFFFFF](https://via.placeholder.com/10/FFFFFF?text=+) #FFFFFF |

* Wireframes: [Figma](https://www.figma.com/file/UyuXSGPD3S1iKuTWYuOF3n/Untitled?node-id=1%3A10)

## Tech Stack

* React.js
* styled-components
* node.js
* mySQL
* Express

Also Used:
* [Material Ui](https://material-ui.com/)
* [Ant Design](https://ant.design/components/overview/)

## API

This website uses the wonderful API [kanye.rest](https://github.com/ajzbc/kanye.rest)

