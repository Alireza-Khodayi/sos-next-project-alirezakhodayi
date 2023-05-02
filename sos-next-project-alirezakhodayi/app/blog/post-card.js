import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function PostCard(props) {
  const { title, content, image, link } = props;

  return (
    <Card
      sx={{
        maxWidth: "auto",
        minHeight: 400,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={`/images/articles/${image}.webp`}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: "justify" }}
          color="text.secondary"
        >
          {content.slice(0, 170) + "..."}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Link href={`/blog/${link}`}>
          <Button size="small" variant="outlined">
            ادامه مطلب...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
