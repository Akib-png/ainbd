<main>
<div className="u-margin-top-xxlarge u-margin-bottom-xxlarge">
    <div className="o-wrapper-l">
        <div className="hero flex flex-column">
            <div>
                <div className="welcomeTextb">
                    Audio Calls with Lawyer 
                </div>
                <div className="descriptionText">
                    anywhere, anytime for free
                </div>
            </div>
            <div>
                <div className="actionText">Ready to connect with <span className={copied ? "username highlight copied" : "username highlight"} onClick={() => { showCopiedMessage() }}>{yourID}</span>?</div>
            </div>
          
            <div>
                To reach your Lawyer. <br />
                Share your username (<span className="username">{yourID}</span>) and await their response <span style={{ fontWeight: 600 }}>OR</span> input their username and click audio call!
            </div>
        </div>
    </div>
</div>
</main>