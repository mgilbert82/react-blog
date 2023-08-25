import EditBtn from "../assets/img/edit-btn.png";
import DeleteBtn from "../assets/img/delete-btn.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.unsplash.com/photo-1692881554842-ce66345eb084?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80"
            alt=""
          />

          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              {" "}
              <img src={EditBtn} alt="edit-btn" />
            </Link>
          </div>
          <div className="edit">
            <Link to={`/write?delete=2`}>
              {" "}
              <img src={DeleteBtn} alt="delete-btn" />
            </Link>
          </div>
        </div>

        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus sit optio expedita, nam nisi quas! Corrupti
          voluptatibus maxime quod ratione veritatis distinctio
          voluptatem libero numquam aperiam autem perferendis,
          incidunt ducimus. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quo natus ex odio eius omnis! Accusantium
          similique unde nulla fuga dolorum totam voluptate fugit quo
          ipsum, deleniti adipisci, eius sint sed. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Minus, ipsam
          consectetur necessitatibus vitae ipsum provident amet
          obcaecati assumenda illo molestiae voluptate temporibus rem
          doloribus deleniti modi sint labore reprehenderit
          consequuntur? Dolorem, provident facilis est nisi
          reprehenderit quaerat culpa! Nemo eaque, quibusdam sequi
          quisquam ab sint in fugit id, aut quos, magnam dolore rerum
          aliquid vitae laborum harum. Vero, iste est! Voluptatum,
          odio quae. Ullam veritatis optio explicabo nemo distinctio,
          accusamus illum quidem reiciendis perferendis nihil
          praesentium iure odit. Nesciunt officiis corporis eum minus
          magni earum ipsum placeat iure a omnis. Repellat sapiente
          consectetur perferendis ipsum cum nesciunt placeat
          reprehenderit, exercitationem corporis nam praesentium
          reiciendis ratione illo aspernatur quis sed iure nostrum.
          Illo quia officia quis magnam aliquid ducimus, aperiam eius.
          Ipsa natus voluptatibus quis delectus expedita! Sed pariatur
          atque perferendis quibusdam voluptate, rerum beatae qui
          iusto nostrum quis, quam, inventore odio enim voluptatem
          delectus saepe vel tempore libero. Cupiditate, veritatis!
          Officiis, alias beatae animi expedita dolor quisquam. Sed
          velit consectetur laudantium molestias, in quisquam atque,
          sapiente ipsam architecto officiis ducimus est delectus
          obcaecati soluta quis, magni iste esse accusamus modi?
          Dolore vitae aliquam voluptates quis distinctio hic. Quia
          quae numquam consectetur, ducimus illo itaque sunt possimus
          perferendis mollitia nam rerum fugit, laboriosam facere
          dignissimos sapiente fuga! Necessitatibus debitis excepturi
          ad? Ab possimus qui consequatur magnam recusandae enim
          inventore aliquam accusantium eveniet, provident optio
          expedita maiores, ea autem earum, minima cupiditate non
          error nesciunt ducimus ad iure tenetur! Saepe, assumenda
          minima? Fuga, vero deserunt iusto ipsam, maxime quod error
          nihil fugiat obcaecati ipsum tenetur iure iste provident
          soluta quidem placeat ut cumque! Debitis sequi velit quasi
          ratione illum incidunt voluptatibus eligendi. Ducimus
          aperiam fugit magni blanditiis ratione quaerat velit tempora
          reiciendis facere omnis dolorem ipsam exercitationem vitae
          minima consequuntur tenetur, dolore vel dolor nesciunt
          voluptatibus, voluptates sint incidunt est iste. Fugit.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
