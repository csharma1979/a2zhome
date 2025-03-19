"use client";

import React , {useState , useEffect} from "react";
import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  Chip,
  Avatar,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import "../../../styles/Blog.css";
import axios from 'axios';

const BlogDetail = ({ slug }) => {
  const [blog, setBlog] = useState(null);
  const [recentBlog, setRecentBlog] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getExcerpt = (text, wordCount) => {
    const words = text.split(" ");
    return words.length > wordCount
      ? words.slice(0, wordCount).join(" ") + "..."
      : text;
  };

  const getBlogDetails = async () => {
    try {
      const blogData = await axios.get(`/api/blog/${slug}`);
      console.log(blogData.data, "bgd");
      setBlog(blogData.data);
      const recentBlogTopic = await fetchBlogs();
      setRecentBlog(recentBlogTopic);
    } catch (error) {
      console.error("Error fetching blog details:", error);
    }
  };

  useEffect(() => {
    if (slug) {
      getBlogDetails();
    }
  }, [slug, getBlogDetails]);

  // Blog data
  const blogData = {
    id: 1,
    title: "Enhancing Customer Experience with AI",
    description:
      "Learn how artificial intelligence is revolutionizing customer service and support.",
    content: `
      Artificial Intelligence has become an integral part of modern customer service strategies. 
      Organizations are leveraging AI to provide faster, more efficient, and personalized customer experiences.
      
      Key Benefits of AI in Customer Service:
      
      1. 24/7 Availability
      AI-powered chatbots can handle customer queries around the clock, ensuring that customers receive immediate responses regardless of time zones or business hours.
      
      2. Consistent Service Quality
      AI systems deliver consistent responses to similar queries, maintaining service quality standards across all customer interactions.
      
      3. Personalization at Scale
      By analyzing customer data and interaction history, AI can provide personalized recommendations and solutions tailored to each customer's needs.
      
      4. Efficient Resource Allocation
      AI handles routine queries, allowing human agents to focus on more complex issues that require emotional intelligence and creative problem-solving.
    `,
    image: "/images/blog/ai-customer-service.jpg",
    category: "AI & Technology",
    date: "March 15, 2024",
    readTime: "5 min read",
    author: {
      name: "Alex Johnson",
      role: "AI Solutions Architect",
      avatar: "/images/authors/alex.jpg",
    },
  };

  // Related blogs data
  const relatedBlogs = [
    {
      id: 2,
      title: "The Future of Live Chat Support",
      description: "Discover the latest trends in live chat support.",
      image: "/images/blog/live-chat-future.jpg",
      category: "Customer Support",
      date: "March 12, 2024",
      readTime: "4 min read",
    },
    {
      id: 3,
      title: "Building an Effective Support Team",
      description: "Tips for managing a support team.",
      image: "/images/blog/team-building.jpg",
      category: "Team Management",
      date: "March 10, 2024",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Omnichannel Support Strategies",
      description: "Implement effective omnichannel support.",
      image: "/images/blog/omnichannel.jpg",
      category: "Strategy",
      date: "March 8, 2024",
      readTime: "7 min read",
    },
  ];

  return (
    <Box className="blog-detail-page">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Main Content */}
          <Grid item xs={12} md={8}>
            <Box
              className="blog-detail-header"
              sx={{
                background: "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
                color: "white",
                p: 4,
                borderRadius: 2,
                mb: 4,
              }}
            >
              {/* <Chip 
                label={blogData.category} 
                size="small" 
                sx={{ 
                  mb: 2,
                  bgcolor: 'rgba(255, 255, 255, 0.9)',
                  color: '#1976d2',
                  fontWeight: 500
                }}
              /> */}
              <Typography
                variant="h3"
                className="blog-detail-title"
                sx={{
                  fontSize: "2.5rem",
                  lineHeight: 1.2,
                  mb: 3,
                  fontWeight: 600,
                  color: "white",
                }}
              >
                {blog.blogTopic}
              </Typography>

              <Box
                className="blog-meta"
                sx={{ color: "rgba(255, 255, 255, 0.9)" }}
              >
                {/* <Box className="author-info">
                  <Avatar src={blogData.author.avatar} alt={blogData.author.name} />
                  <Box sx={{ ml: 2 }}>
                    <Typography variant="subtitle1" sx={{ color: 'white' }}>
                      {blogData.author.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                      {blogData.author.role}
                    </Typography>
                  </Box>
                </Box> */}
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255, 255, 255, 0.8)" }}
                >
                  {new Date(blog.createdAt).toLocaleDateString()}
                </Typography>
              </Box>
            </Box>

            <Box className="blog-detail-image">
              <img
                src={`${BASE_IMAGE_URL}/${blog.uploadImage.replace("\\", "/")}`}
                alt={blog.blogTopic}
              />
            </Box>

            <Box className="blog-content">
              {blog.blogDescription || "No description available."}
              {/* {blogData.content.split("\n\n").map((paragraph, index) => (
                <Typography key={index} paragraph>
                  {paragraph}
                </Typography>
              ))} */}
            </Box>
          </Grid>

          {/* Related Blogs Sidebar */}
          <Grid item xs={12} md={4}>
            <Box className="related-blogs">
              <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                Related Articles
              </Typography>
              <Box className="related-blogs-list">
                {relatedBlogs.map((blog) => (
                  <Card
                    key={blog.id}
                    className="related-blog-card"
                    onClick={() => (window.location.href = `/blog/${blog.id}`)}
                    sx={{ cursor: "pointer" }}
                  >
                    <CardContent sx={{ p: 2.5 }}>
                      <Box sx={{ mb: 2 }}>
                        <Chip
                          label={blog.category}
                          size="small"
                          className="blog-category"
                          onClick={(e) => e.stopPropagation()}
                        />
                      </Box>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                          fontSize: "1.1rem",
                          lineHeight: 1.3,
                        }}
                      >
                        {blog.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                        {blog.description}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          borderTop: "1px solid #eee",
                          pt: 2,
                        }}
                      >
                        <Box>
                          <Typography
                            variant="caption"
                            color="text.secondary"
                            display="block"
                          >
                            {blog.date}
                          </Typography>
                          <Typography
                            variant="caption"
                            color="text.secondary"
                            display="block"
                          >
                            {blog.readTime}
                          </Typography>
                        </Box>
                        <Button
                          component={Link}
                          to={`/blog/${blog.id}`}
                          color="primary"
                          size="small"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Read More →
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogDetail;
