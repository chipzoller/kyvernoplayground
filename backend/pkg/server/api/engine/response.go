package engine

import (
	kyvernov1 "github.com/kyverno/kyverno/api/kyverno/v1"
	"k8s.io/apimachinery/pkg/apis/meta/v1/unstructured"

	"github.com/kyverno/playground/backend/pkg/engine"
)

type EngineResponse struct {
	Policies          []kyvernov1.PolicyInterface `json:"policies"`
	Resources         []unstructured.Unstructured `json:"resources"`
	Mutation          []engine.Response           `json:"mutation"`
	ImageVerification []engine.Response           `json:"imageVerification"`
	Validation        []engine.Response           `json:"validation"`
	Generation        []engine.Response           `json:"generation"`
}
