import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    {
      id: 1,
      title:
        "Phasellus arcu suspendisse magnis feugiat proin nullam platea habitant nascetur mattis",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate habitant, phasellus conubia pretium in enim arcu interdum aliquet, mollis platea viverra ut sociosqu etiam urna proin. Neque conubia sociosqu dignissim sed molestie dui hendrerit sodales, scelerisque semper quisque parturient ante rutrum nulla sociis, est inceptos ac vivamus nascetur proin nisl. Convallis sem odio laoreet tincidunt ridiculus",
      img: "https://plus.unsplash.com/premium_photo-1666899830696-9f3bbf61c816?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
    },
    {
      id: 2,
      title:
        "Phasellus arcu suspendisse magnis feugiat proin nullam platea habitant nascetur mattis",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate habitant, phasellus conubia pretium in enim arcu interdum aliquet, mollis platea viverra ut sociosqu etiam urna proin. Neque conubia sociosqu dignissim sed molestie dui hendrerit sodales, scelerisque semper quisque parturient ante rutrum nulla sociis, est inceptos ac vivamus nascetur proin nisl. Convallis sem odio laoreet tincidunt ridiculus",
      img: "https://plus.unsplash.com/premium_photo-1666899830696-9f3bbf61c816?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
    },
    {
      id: 3,
      title:
        "Phasellus arcu suspendisse magnis feugiat proin nullam platea habitant nascetur mattis",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate habitant, phasellus conubia pretium in enim arcu interdum aliquet, mollis platea viverra ut sociosqu etiam urna proin. Neque conubia sociosqu dignissim sed molestie dui hendrerit sodales, scelerisque semper quisque parturient ante rutrum nulla sociis, est inceptos ac vivamus nascetur proin nisl. Convallis sem odio laoreet tincidunt ridiculus",
      img: "https://plus.unsplash.com/premium_photo-1666899830696-9f3bbf61c816?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
    },
    {
      id: 4,
      title:
        "Phasellus arcu suspendisse magnis feugiat proin nullam platea habitant nascetur mattis",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate habitant, phasellus conubia pretium in enim arcu interdum aliquet, mollis platea viverra ut sociosqu etiam urna proin. Neque conubia sociosqu dignissim sed molestie dui hendrerit sodales, scelerisque semper quisque parturient ante rutrum nulla sociis, est inceptos ac vivamus nascetur proin nisl. Convallis sem odio laoreet tincidunt ridiculus",
      img: "https://plus.unsplash.com/premium_photo-1666899830696-9f3bbf61c816?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
    },
  ];
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              {" "}
              <img src={post.img} alt="" />
            </div>{" "}
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
