import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function PostCard(props) {
  const { title, content, image, link, time } = props;

  return (
    <Card
      sx={{
        maxWidth: "auto",
        minHeight: 400,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border: "1px solid #1158A7",
        borderRadius: "10px",
      }}
    >
      {/* <CardMedia
        component="img"
        alt="green iguana"
        height="158"
        image={`/images/articles/${image}.webp`}
        sx={{
          margin: 3,
          width: "auto",
          objectFit: "contain",
          borderRadius: 6,
        }}
      /> */}
      <img
        style={{ margin: 18, borderRadius: "8px" }}
        src={`/images/articles/${image}.webp`}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h3"
          sx={{ fontSize: "18px", fontWeight: "bold" }}
          component="div"
        >
          {title}
        </Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            color: "#616161",
            marginTop: "5px",
            marginBottom: "5px",
          }}
        >
          <AccessTimeIcon />
          <Typography variant="body2" color="text.secondary">
            {`${time}`}&nbsp;دقیقه
          </Typography>
        </div>
        <Typography variant="body2" color="text.secondary">
          {content.slice(0, 120) + "..."}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginLeft: 2,
          marginBottom: 2,
        }}
      >
        <Link href={`/blog/${link}`}>
          <Button sx={{ width: "125px" }} size="medium" variant="outlined">
            ادامه
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
