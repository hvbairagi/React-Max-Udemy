import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import { useCallback, useEffect, useState } from "react";
import { Container, Nav, Navbar, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { REMOVE } from "../redux/actions/action";

const Header = () => {
  const data = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();
  const [totalPrice, setPrice] = useState([]);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const remove = (id) => {
    dispatch(REMOVE(id));
  };

  let total = () => {
    let price = data.reduce((acc, el) => acc + el.price * el.quantity, 0);
    setPrice(price);
  };

  useEffect(() => total(), [total]);

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" style={{ height: "60px" }}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-3">
            Add to cart
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light">
              Home
            </NavLink>
          </Nav>

          <Badge
            badgeContent={data.length}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i
              className="fa-solid fa-cart-shopping text-light"
              style={{ fontSize: 25, cursor: "pointer" }}
            ></i>
          </Badge>
        </Container>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {data.length ? (
            <div
              className="card_details"
              style={{ width: "24rem", padding: 10 }}
            >
              <Table>
                <thead>
                  <tr>
                    <th>Photo </th>
                    <th>Restaurant Name</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((el, id) => {
                    return (
                      <tr key={id}>
                        <td>
                          <NavLink to={`/cart/${el.id}`} onClick={handleClose}>
                            <img
                              src={el.imgData}
                              alt=""
                              style={{ height: "5rem" }}
                            />
                          </NavLink>
                        </td>
                        <td>
                          <p>{el.rNameZ}</p>
                          <p>Price: ₹{el.price}</p>
                          <p>Quantity: {el.quantity}</p>
                          <p
                            style={{
                              color: "red",
                              fontSize: 20,
                              cursor: "pointer",
                            }}
                            onClick={() => remove(el.id)}
                          >
                            <i className="fas fa-trash smallTrash"></i>
                          </p>
                        </td>
                        <td
                          className="mt-5"
                          style={{
                            color: "red",
                            fontSize: 20,
                            cursor: "pointer",
                          }}
                          onClick={() => remove(el.id)}
                        >
                          <i className="fas fa-trash largeTrash"></i>
                        </td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td>
                      <p className="text-center">Total: ₹{totalPrice}</p>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          ) : (
            <div
              className="card_details d-flex justify-content-center align-items-center"
              style={{ fontSize: "24rem", padding: 10, position: "relative" }}
            >
              <i
                className="fas fa-close smallclose"
                style={{
                  position: "absolute",
                  top: 2,
                  right: 20,
                  fontSize: 23,
                  cursor: "pointer",
                }}
                onClick={handleClose}
              ></i>
              <p style={{ fontSize: 22 }}>Your cart is empty</p>
              <img
                src="../../public/cart.gif"
                alt=""
                className="emptycart_img"
                style={{ width: "5rem", padding: 10 }}
              />
            </div>
          )}
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;
