const HeroSection =() =>{
    return(
        <main className="hero container">
            <div className="heroContent">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES YOUR MFEET DESEVE THE BEST AND WE ARE HERE TO HELP YOU</p>
            <div className="hero-btn">
                <button>Shop Now</button>
                <button className="secondary-btn">Category</button>
            </div>
            <div className="shopping">
                <p>Also available On</p>
                <div className="brand-icons">
                    <img src="/images/amazon.png" alt="amazon-logo" />
                    <img src="/images/flipkart.png" alt="flipkart-logo" />
                </div>
            </div>
            </div>
            <div className="heroImage">
            <img src="/images/shoe_image.png" alt="shoe-image-logo" />
            </div>
        </main>
    );
};

export default HeroSection;