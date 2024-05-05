import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src='https://elevatebuy.com/media/wysiwyg/Shop_now_for_all_your_grocery_essentional_copy.jpg'
          alt=""
        />

        <div className="home_row">
          <Product
            id="12321341"
            title="Kelloggs Corn Flakes - Original, High In Iron & B Group Vitamins, Breakfast Cereals, 900 g
            "
            price={318.2}
            rating={5}
            image="https://www.bigbasket.com/media/uploads/p/m/40015688_24-kelloggs-corn-flakes.jpg?tr=w-1920,q=80 "
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={5000}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home_row">
          <Product
            id="4903850"
            title="Mogu Mogu Juice - Lychee 25% with Nata De Coco, 1 L Bottle"
            price={199.99}
            rating={3}
            image="https://www.bigbasket.com/media/uploads/p/l/20002225_1-mogu-mogu-juice-lychee-25-with-nata-de-coco.jpg "
          />
          <Product
            id="23445930"
            title="Aashirvaad Select Sharbati Atta - Rich In Nutrients, For Soft & Fluffy Roti, 10 kg"
            price={546}
            rating={5}
            image="https://www.bigbasket.com/media/uploads/p/l/40236231_3-aashirvaad-select-sharbati-atta-100-mp-whole-wheat-rotis-stay-softer-for-longer.jpg"
          />
          <Product
            id="3254354345"
            title="Lalbagh Mango - Sindhura, 1 kg"
            price={104.99}
            rating={4}
            image="https://www.bigbasket.com/media/uploads/p/m/10000306_3-fresho-lalbagh-mango-sindhura.jpg?tr=w-1920,q=80"
          />
        </div>

        <div className="home_row">
          <Product
            id="90829332"g
            title="Lindt Lindor Assorted Chocolate - 4 Flavours, 200 g"
            price={800}
            rating={4}
            image="https://www.bigbasket.com/media/uploads/p/l/40146396_1-lindt-lindor-balls-assorted-cornet.jpg"
          />
          <Product
            id="90829332"g
            title="Saffola Active Edible Oil, 2x5L Multipack"
            price={1353}
            rating={4}
            image="https://www.bigbasket.com/media/uploads/p/l/1205598-2_1-saffola-active-edible-oil.jpg"
          />
        </div>

        <div className="home_row">
          <Product
            id="12321341"
            title="Britannia Good Day - Cashew Cookies, 1 Kg"
            price={200}
            rating={5}
            image="https://www.bigbasket.com/media/uploads/p/m/40203379_3-britannia-good-day-cashew-cookies.jpg?tr=w-1920,q=80"
          />
          <Product
            id="49538094"
            title="Red Label Tea, 2x1 kg Multipack"
            price={1079}
            rating={4}
            image="https://www.bigbasket.com/media/uploads/p/l/1204482_1-red-label-tea.jpg"
          />
          <Product
            id="12321341"
            title="Amul Taaza Fresh Toned Milk, 12x200 ml Multipack"
            price={180.48}
            rating={5}
            image="https://www.bigbasket.com/media/uploads/p/l/1204752_2-amul-taaza-fresh-toned-milk.jpg"
          />
        </div>
      </div>
    </div>
    );
};

export default Home;