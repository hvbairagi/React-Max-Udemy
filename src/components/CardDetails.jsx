import { Table } from "react-bootstrap";

function CardDetails() {
  return (
    <>
      <div className="container mt-2 ">
        <h2 className="text-center">Item Details Page</h2>
        <section className="container mt-3">
          <div className="item_details">
            <div className="item_img">
              <img src="" alt="" />
            </div>

            <div className="details">
              <Table>
                <tr>
                  <td>
                    <p>
                      <strong>Restaurant</strong> : lkashd
                    </p>
                    <p>
                      <strong>Price</strong> : lkashd
                    </p>
                    <p>
                      <strong>Dishes</strong> : lkashd
                    </p>
                    <p>
                      <strong>Total</strong> : lkashd
                    </p>
                  </td>
                  <td>
                    <p>
                      <strong>Rating</strong> :
                      <span
                        style={{
                          background: "green",
                          color: "#fff",
                          padding: "2px 5px ",
                          borderRadius: "5px",
                        }}
                      >
                        3.5 ★
                      </span>
                    </p>
                    <p>
                      <strong>Order Review</strong> :<span>3.5 ★</span>
                    </p>
                    <p>
                      <strong>Remove</strong> :
                      <span>
                        <i
                          className="fas fa-trash"
                          style={{
                            color: "red",
                            fontSize: 20,
                            cursor: "pointer",
                          }}
                        ></i>
                      </span>
                    </p>
                    <p>
                      <strong>Rating</strong> :<span>3.5 ★</span>
                    </p>
                  </td>
                </tr>
              </Table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default CardDetails;
