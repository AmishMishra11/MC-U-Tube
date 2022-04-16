import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    imageUrl:
      "https://res.cloudinary.com/amish11/image/upload/v1650152552/video%20lib%20category/trailer_sao7fc.png",
    categoryName: "Trailers",
    description: "Videos of different marvel shows and movie trailers",
  },
  {
    _id: uuid(),
    imageUrl:
      "https://res.cloudinary.com/amish11/image/upload/v1650152549/video%20lib%20category/entertainment_hlbjpe.webp",
    categoryName: "Entertainment",
    description: "Videos of funny skits about marvel movies",
  },
  {
    _id: uuid(),
    imageUrl:
      "https://res.cloudinary.com/amish11/image/upload/v1650152549/video%20lib%20category/discussion_vkjwec.jpg",
    categoryName: "Discussion",
    description: "Videos about marvel and all its theory",
  },
];
