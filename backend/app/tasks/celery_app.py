from celery import Celery

from app.core.config import settings

celery_app = Celery('gridiant', broker=settings.redis_url)
celery_app.conf.task_routes = {
    'app.tasks.forecast_tasks.generate_forecast': {'queue': 'forecast'},
    'app.tasks.optimization_tasks.run_optimization': {'queue': 'optimization'},
    'app.tasks.scenario_tasks.run_scenario': {'queue': 'scenario'},
}
