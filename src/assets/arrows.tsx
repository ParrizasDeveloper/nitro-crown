import { SVGProps } from 'react'

export function ArrowRight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg 
            viewBox="0 0 500 500" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M465.507 125.577V374.422L250 498.845L34.4941 374.422V125.577L250 1.1543L465.507 125.577Z" stroke="currentColor" strokeWidth="2" />
            <line x1="215.707" y1="178.293" x2="286.418" y2="249.004" stroke="currentColor" strokeWidth="2" />
            <line x1="214.293" y1="320.004" x2="285.004" y2="249.293" stroke="currentColor" strokeWidth="2" />
        </svg>

    )
}

export function ArrowLeft(props: SVGProps<SVGSVGElement>) {
    return (
        <svg 
            viewBox="0 0 500 500" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M465.507 125.577V374.422L250 498.845L34.4941 374.422V125.577L250 1.1543L465.507 125.577Z" stroke="currentColor" strokeWidth="2" />
            <line x1="215.707" y1="249.293" x2="286.418" y2="320.004" stroke="currentColor" strokeWidth="2" />
            <line x1="214.293" y1="249.004" x2="285.004" y2="178.293" stroke="currentColor" strokeWidth="2" />
        </svg>
    )
}


