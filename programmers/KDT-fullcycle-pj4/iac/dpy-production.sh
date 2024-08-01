#!/bin/sh

VAR_FILE="production.tfvars"
: ${KUBECONFIG_PATH:="~/.kube/ec2-minikube/kubeconfig"}
: ${IMG_BE:="notes-be:latest"}
: ${IMG_FE:="notes-fe:latest"}

if [ "$1" = "on" ] ; then
    cat production.conf setup.conf > notes.tf
    terraform init -reconfigure -no-color
    terraform apply --auto-approve -no-color \
        -var-file="${VAR_FILE}" \
        -var "kubernetes_config_path=${KUBECONFIG_PATH}" \
        -var "container_image_be=${IMG_BE}" \
        -var "container_image_fe=${IMG_FE}"
elif [ "$1" = "off" ] ; then
    cat production.conf setup.conf > notes.tf
    terraform init -reconfigure
    terraform destroy --auto-approve \
        -var-file="${VAR_FILE}" \
        -var "kubernetes_config_path=${KUBECONFIG_PATH}"
else
    echo "Usage: $0 <on/off>"
fi
