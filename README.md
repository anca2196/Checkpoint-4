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

<p align="left">
<img alt="React" src="https://img.shields.io/badge/React-white?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img alt="CSS" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
<img alt="Nodejs" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" /> 
<img alt="Express" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" />
<img alt="MySQL" src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" />
<img alt="Styled-components" src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
</p>

A showcase of Kane West's most amazing thoughts, plus the option to log how these thoughts influence you.

### Log In Credentials:

* Username: kanye
* Password: kanye

### Frontend
* This folder contains the react-app. 

<p align="center">
  <img width="700" alt="React_App" src="https://user-images.githubusercontent.com/62710917/126641573-0b016590-c85c-4eca-b10f-0e3f7ab95e7e.png">
  <img width="700" alt="React_App" src="https://user-images.githubusercontent.com/62710917/126641421-e3b5b732-6a8e-48b8-8ea0-b3d0fe1df338.png">
  <img width="700" alt="React_App" src="https://user-images.githubusercontent.com/62710917/126641890-ad335469-f442-4401-b0bf-c48a54793a42.png">
  <img width="700" alt="React_App" src="https://user-images.githubusercontent.com/62710917/126642119-45524b1a-2114-4657-bcea-9fe8ca671f4b.png">



</p>


### Media responsive:
<p align="center">
<img width="375" alt="React_App" src="https://user-images.githubusercontent.com/62710917/126642773-e01cdd9e-b9f7-4598-9a55-43addb42d6a4.png">
<img width="369" alt="React_App" src="https://user-images.githubusercontent.com/62710917/126642714-c613a883-ff8d-4d1e-8b87-ca54c381fd1a.png">
</p>

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

* Wireframes available on [Figma](https://www.figma.com/file/UyuXSGPD3S1iKuTWYuOF3n/Untitled?node-id=1%3A10)

## Tech Stack

* React.js
* Styled-Components
* Node.js
* mySQL
* Express

Also Used:
* [Material Ui](https://material-ui.com/)
* [Ant Design](https://ant.design/components/overview/)

## API

This website uses the wonderful API [kanye.rest](https://github.com/ajzbc/kanye.rest)

