import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <div className="text-center">
                <img
                    src="https://www.amw.gdynia.pl/media/k2/items/cache/374fef18d9a564adff2f3808d7fd487b_XL.jpg"
                    width="300"
                    className="img-thumbnail"
                    style={{ marginTop: "20px" }}
                />
                <hr />

                <h1>Lista Studentów</h1>
            </div>
        );
    }
}

export default Header;