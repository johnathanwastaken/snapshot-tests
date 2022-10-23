import React from "react"
import { Card } from "react-bootstrap"

export default function GitHub(){
    const link="https://avatars.githubusercontent.com/u/97579743?v=4"
    return(
        <div className="card">
            <Card>
                <Card.Img variant="top" src={link}/>
                <Card.Body>
                    <Card.Title>Johnathan Ortiz-Flores</Card.Title>
                    <Card.Text>
                        I need sleep.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}