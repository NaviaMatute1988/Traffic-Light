import './Light.css'

export function Light({color, opacity}) {
    return (
        <>
        <div className="light" style={{background: color, opacity: opacity}}>
        </div>

        </>
    )
};