import { Fragment, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ADD, REMOVE } from "../redux/actions/action";

function CardDetails() {
  const { id } = useParams();
  const items = useSelector((state) => state.cartReducer.cart);
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const compare = () => {
    let item = items.filter((el) => el.id == id);
    if (!item) navigate("/");
    setData(item);
  };

  useEffect(() => {
    compare();
  }, [id]);

  const deleteItem = (id) => {
    console.log("called", id);
    dispatch(REMOVE(id));
    navigate("/");
  };

  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Items Details Page</h2>

        <section className="container mt-3">
          <div className="items_details">
            {data.map((el, id) => {
              return (
                <Fragment key={id}>
                  <div className="items_img">
                    <img src={el.imgData} alt="" />
                  </div>

                  <div className="details">
                    <Table>
                      <tbody>
                        <tr>
                          <td>
                            <p>
                              <strong>Restaurant</strong> : {el.rName}
                            </p>
                            <p>
                              <strong>Price</strong> : ₹{el.price}
                            </p>
                            <p>
                              <strong>Dishes</strong> : {el.address}
                            </p>
                            <p>
                              <strong>Total</strong> :₹{el.price * el.quantity}
                            </p>
                            <div
                              className="mt-5 d-flex justify-content-between align-items-center"
                              style={{
                                width: 100,
                                cursor: "pointer",
                                background: "#ddd",
                                color: "#111",
                              }}
                            >
                              <span
                                style={{ fontSize: 24 }}
                                onClick={
                                  el.quantity <= 1
                                    ? () => deleteItem(el.id)
                                    : () => dispatch(REMOVE(el.id))
                                }
                              >
                                -
                              </span>
                              <span style={{ fontSize: 22 }}>
                                {el.quantity}
                              </span>
                              <span
                                style={{ fontSize: 24 }}
                                onClick={() => dispatch(ADD(el))}
                              >
                                +
                              </span>
                            </div>
                          </td>
                          <td>
                            <p>
                              <strong>Rating :</strong>
                              <span
                                style={{
                                  background: "green",
                                  color: "#fff",
                                  padding: "2px 5px",
                                  borderRadius: "5px",
                                }}
                              >
                                {el.rating} ★
                              </span>
                            </p>
                            <p>
                              <strong>Order Review :</strong>
                              <span>{el.someData} </span>
                            </p>
                            <p>
                              <strong>Remove :</strong>
                              <span>
                                <i
                                  className="fas fa-trash"
                                  onClick={() => deleteItem(el.id)}
                                  style={{
                                    color: "red",
                                    fontSize: 20,
                                    cursor: "pointer",
                                  }}
                                ></i>
                              </span>
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </Fragment>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}

export default CardDetails;
