import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    imageUrl:
      "https://res.cloudinary.com/amish11/image/upload/v1650184090/video%20lib%20category/Trailers_dub3fd.jpg",
    categoryName: "Trailer",
    description: "Videos of different marvel shows and movie trailers",
  },
  {
    _id: uuid(),
    imageUrl:
      "https://res.cloudinary.com/amish11/image/upload/v1650184088/video%20lib%20category/Entertainment_fyl3an.jpg",
    categoryName: "Entertainment",
    description: "Videos of funny skits about marvel movies",
  },
  {
    _id: uuid(),
    imageUrl:
      "https://res.cloudinary.com/amish11/image/upload/v1650184098/video%20lib%20category/Discussion_poykok.jpg",
    categoryName: "Discussion",
    description: "Videos about marvel and all its theory",
  },

  {
    _id: uuid(),
    imageUrl:
      "https://res.cloudinary.com/amish11/image/upload/v1650184086/video%20lib%20category/Shorts_uhf50k.jpg",
    categoryName: "Shorts",
    description: "Shorts about marvel memes",
  },
];
