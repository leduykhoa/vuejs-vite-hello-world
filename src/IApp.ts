import { Component } from "vue"

export interface FormBaseInterface {
    name: String
    title?: String
    type?: String
    value: String
    options?: Object
}

export interface ElementInterface {
    _id?: String
    id: String
    name: String
    title?: String
    icon: String
    settings: String
    style: String
    componentContentView?: Component
    componentColRight?: Component
    _configs?: Object
}