import './Tab.css'

export default function Tab({ active, children, onClick }) {
    return (
        <div className={active ? 'active' : undefined} onClick={onClick}>
            {children}
        </div>
    )
}