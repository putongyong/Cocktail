import Footer from "./components/footer";
import Navbar from "./components/navbar";
import ProductList from "./components/productlist";

export default function Products() {
    return (
      <>
        <div class="container">
		<Navbar/>
		<main>
			<header class="row tm-welcome-section">
				<h2 class="col-12 text-center tm-section-title">Our products</h2>
				<p class="col-12 text-center">Total 3 HTML pages are included in this template. Header image has a parallax effect. You can feel free to download, edit and use this TemplateMo layout for your commercial or non-commercial websites.</p>
			</header>
			<ProductList/>
            </main>
		<Footer/>
	</div>
      </>
    );
  }