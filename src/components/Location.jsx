export default function Location() {
    return (
        <div className="location">
        <div className="image-container">
          <img 
            src="/images/map.png"
            alt="map"
            className="responsive-image"
          />
        </div>
        <div>
          <p>610 S Federal Hwy, Deerfield Beach, FL, United States, 33441</p>
          <p>Phone: 561-460-9905</p>
          <p>Email: <span className="email">sweetsensationbyfran@gmail.com</span></p>
        </div>
      </div>
    )
};