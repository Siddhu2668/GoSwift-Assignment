import express, { Request, Response } from "express";

const router = express.Router();

// Define types for API responses
interface User {
  id: string;
  name: string;
  email: string;
}

interface Post {
  id: string;
  title: string;
  content: string;
  userId: string;
  comments?: Comment[];
}

interface Comment {
  id: string;
  postId: string;
  text: string;
}

// Route to fetch all users
router.get("/users", async (req: Request, res: Response) => {
  try {
    const usersResponse = await fetch("https://api.example.com/users");
    const users: User[] = await usersResponse.json() as User[];
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// Route to fetch a single user by ID
router.get("/users/:userId", async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const userResponse = await fetch(`https://api.example.com/users/${userId}`);
    const user: User = await userResponse.json() as User;
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user" });
  }
});

// Route to delete a user
router.delete("/users/:userId", async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    await fetch(`https://api.example.com/users/${userId}`, { method: "DELETE" });
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete user" });
  }
});

// Route to fetch posts
router.get("/posts", async (req: Request, res: Response) => {
  try {
    const postsResponse = await fetch("https://api.example.com/posts");
    const posts: Post[] = await postsResponse.json() as Post[];
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

// Export the router
export default router;
// End of src/routes/userRoutes.ts