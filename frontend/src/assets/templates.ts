export const PolicyTemplate = `apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: require-labels
spec:
  validationFailureAction: Audit
  rules:
    - name: check-for-labels
      match:
        any:
          - resources:
              kinds:
                - Pod
      validate:
        message: "label 'app.kubernetes.io/name' is required"
        pattern:
          metadata:
            labels:
              app.kubernetes.io/name: "?*"`

export const ContextTemplate = `kubernetes:
  version: '1.27'

context:
  username: ''
  groups: []
  roles: []
  clusterRoles: []
  namespaceLabels: {}
  operation: CREATE

variables: {}`

export const ResourceTemplate = `apiVersion: v1
kind: Pod
metadata:
  labels:
    run: nginx
  name: nginx
  namespace: default
spec:
  containers:
    - image: nginx
      name: nginx
      resources: {}`

export const ConfigTemplate = `apiVersion: v1
kind: ConfigMap
metadata:
  name: kyverno
  namespace: kyverno
data:
  defaultRegistry: docker.io
  resourceFilters: |
    [*,kyverno,*]
    [Event,*,*]
    [*,kube-system,*]
    [*,kube-public,*]
    [*,kube-node-lease,*]
    [Node,*,*]
    [APIService,*,*]
    [TokenReview,*,*]
    [SubjectAccessReview,*,*]
    [SelfSubjectAccessReview,*,*]
    [Binding,*,*]
    [ReplicaSet,*,*]
    [AdmissionReport,*,*]
    [ClusterAdmissionReport,*,*]
    [BackgroundScanReport,*,*]
    [ClusterBackgroundScanReport,*,*]
    [ClusterRole,*,kyverno:*]
    [ClusterRoleBinding,*,kyverno:*]
    [ServiceAccount,kyverno,kyverno]
    [ConfigMap,kyverno,kyverno]
    [ConfigMap,kyverno,kyverno-metrics]
    [Deployment,kyverno,kyverno]
    [Job,kyverno,kyverno-hook-pre-delete]
    [NetworkPolicy,kyverno,kyverno]
    [PodDisruptionBudget,kyverno,kyverno]
    [Role,kyverno,kyverno:*]
    [RoleBinding,kyverno,kyverno:*]
    [Secret,kyverno,kyverno-svc.kyverno.svc.*]
    [Service,kyverno,kyverno-svc]
    [Service,kyverno,kyverno-svc-metrics]
    [ServiceMonitor,kyverno,kyverno-svc-service-monitor]
    [Pod,kyverno,kyverno-test]`

export const CustomResourceDefinitionsTemplate = ''
